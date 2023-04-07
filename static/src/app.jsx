

const App = () => {
    return (
        <div>
            <h1>Hello, BIRDld</h1>
        </div>
    )
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
    <React.Fragment>
      <App />
    </React.Fragment>
  );