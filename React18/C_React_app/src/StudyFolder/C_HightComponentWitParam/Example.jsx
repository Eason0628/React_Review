import axios from "axios";
import React from "react";
class MyDog extends React.Component {
    render () {
        return <>
            <img src={this.props.url} width="200" />
            <h1>我是⼀只狗</h1>
        </>
    }
}
class MyCat extends React.Component {
    render () {
        return <>
            <img src={this.props.url} width="200" />
            <h1>我是⼀只猫</h1>
        </>
    }
} function withAnimal (WrapComponent, url, type) {
    return class extends React.Component {
        state = {
            data: ""
        }
        getData = () => {
            axios.get(url).then(res => {
                console.log(res)
                this.setState({
                    data: type == 1 ? res.data.message : res.data[0].url
                })
            })
        }
        componentDidMount () {
            this.getData()
        }
        render () {
            return <WrapComponent url={this.state.data} {...this.props} />
        }
    }
}
const Dog = withAnimal(MyDog, "https://dog.ceo/api/breeds/image/random", 1)
const Cat = withAnimal(MyCat, "https://api.thecatapi.com/v1/images/search", 2)
class App extends React.Component {
    render () {
        return (
            <div>
                <Dog />
                <Cat />
            </div>
        )
    }
}
export default App;