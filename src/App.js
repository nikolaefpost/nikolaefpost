import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, Sidebar, Search, ConversationList, Conversation, Avatar } from '@chatscope/chat-ui-kit-react';
import { useQuery } from '@apollo/client';
import { GET_FIRST_FIVE_USERS } from "./gql/query"

function App() {
    const { loading, error, data } = useQuery(GET_FIRST_FIVE_USERS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;

    return (
        <div style={{
        height: "600px",
            position: "relative"
    }}>
<MainContainer responsive>
    <Sidebar position="left" scrollable={false}>
        <Search placeholder="Search..." />
        <ConversationList>
        {data.queryUser.map(u =>
                <Conversation name={u.username} info={u.status}>
            <Avatar src={u.avatar} name={u.username} status={u.active ? "available" : "invisible"} />
    </Conversation>
)}
</ConversationList>
    </Sidebar>
    </MainContainer>
    </div>
);
}

export default App;