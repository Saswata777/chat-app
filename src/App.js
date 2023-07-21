
import './App.css';
import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './Components/chatFeed';
// import Logi from './Components/logingForm';
import LogingForm from './Components/logingForm';



function App() {

  if (!localStorage.getItem('username')) return <LogingForm />;

  return (
   <ChatEngine 
        height = "100vh"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        projectID="0325e773-9d34-42c8-b157-70c41996255f"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
   />
  );

}

export default App;
