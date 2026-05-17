
function App (props) {
    const { b } = props;
    console.log('子组件渲染了');    
    return (
        <div>
            这是子组件，父组件传来的count是：{b}
        </div>
    );
}

export default App;