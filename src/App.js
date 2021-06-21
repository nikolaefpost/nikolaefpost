import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, Sidebar, Search, ConversationList, Conversation, Avatar } from '@chatscope/chat-ui-kit-react';
import { useQuery } from '@apollo/client';
import { GET_FIRST_FIVE_USERS } from "./gql/query"
// import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
// import SigninPage from "./pages/signin";
// import SignupPage from "./pages/signup";
import ChatPage from "./pages/chat";
import SignInSide from "./pages/signInSide/SignInSide";
import Dashboard from "./pages/dashboard/Dashboard";
import Album from "./pages/Album/Album";

function App() {
    const { loading, error, data } = useQuery(GET_FIRST_FIVE_USERS);

    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error</p>;

    return (
        <Router>
            <Switch>
                <Route path='/signin'>
                    <SignInSide/>
                </Route>
                <Route path='/main'>
                    <Dashboard/>
                </Route>
                <Route path='/album'>
                    <Album/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;