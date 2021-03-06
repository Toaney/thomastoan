import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Article from '../components/article';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import NotFound from '../components/notFound';
import Header from '../components/header';
import Footer from '../components/footer';
import '../scss/styles.scss';


const HackerNews = () => {
    const [ articleList, setArticleList ] = useState([]);
    const [ page, setPage ] = useState(1);
    const [ startIndex, setStartIndex ] = useState(1);
    const [ nextPage, setNextPage ] = useState("2")
    const [ displayError, setDisplayError ] = useState(false)

    // useParams is a custom hook from react-router that gives access to the url id (page number)
    let { id } = useParams();

    // pagination logic - update page and startIndex state when url updates
    const getPage = () => {
        let currentPage = Number(id);
        let start = currentPage * 30 - 29;
        setPage(currentPage);
        if (currentPage !== page) {
            if (isNaN(start)){
                setStartIndex(1);
            } else {
                setStartIndex(start);
            }
        }
        // logic for nextPage used by 'More" link 
        if (isNaN(currentPage)){
            return
        } else {
            setNextPage(currentPage + 1)
        }
    }

    // API call to get intial HN Topstories on page load
    const get_assets = () => {
        axios
        .get("https://hacker-news.firebaseio.com/v0/topstories.json")
        .then(res => {
            setArticleList(...[res.data])
        })
        .catch((err) => {
            console.log(err)
            setDisplayError(true)
        });
    };

    // get intial HN Topstories on page load
    useEffect(() => {
        const pageNumber = Number(id)
        if(id && isNaN(pageNumber)){
            setDisplayError(true)
        } else {
            get_assets();
        }
    }, []);

    // getPage fires to ensure all content updates when page url changes
    useEffect(() => {
        getPage();
    });

    // ArticleList component 
    // Note: odd page reload behavior when this component gets imported from an external file
    // TODO: put ArticleList into its own file; 
    const ArticleList = ({list, start}) => {
        return (
            <React.Fragment>
                {list.slice(start - 1, start + 29).map( (item, index) => (
                    <Article 
                        item= {item}
                        index= {index + startIndex}
                        key= {index}
                    />
                ))}
            </React.Fragment>
        )
    }

    return(

        <React.Fragment>
            <div className="row">
                <div className="profile">
                    <p>Displayed below is the UI for a Hacker News clone. For this demo all internal/inbound links have been disabled. The original site can be found <a href="https://news.ycombinator.com/" alt="hacker news" target="_blank">here</a>. This project can be cloned from this <a href="https://github.com/toaney/hacker-news-clone" alt="hacker news clone repo" target="_blank">Git Repository</a>. Note: running the project locally will support additional features such as pagination and article pages with a recursive comment structure.</p>
                </div>
            </div>
            {displayError || !articleList || startIndex > articleList.length?//error handling for if no articleList exists or if there are no more articles to display
                <div></div>
            :
            <div className="page-content">
                <Header />
                <React.Fragment>
                    <ArticleList list={articleList} start={startIndex}/>
                    <Link className="more-articles-link" to={`/${nextPage}`}>More</Link>
                </React.Fragment>
                <Footer />
            </div>
            }
        </React.Fragment>
    )
}

export default HackerNews;






