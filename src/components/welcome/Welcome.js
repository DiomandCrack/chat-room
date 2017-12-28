//react
import React ,{ Component }from 'react'
//style
import style from './style/style'
//routeIndex
import RouteIndex from '../../route'
class Welcome extends Component {

    state = {
        prompt:false
    }
    showPropt(){
        this.setState((state)=>{
            state.prompt = !state.prompt
            console.log(state.prompt)
        })
    }
    render(){
        return(
            <section style={style.root}>
            {/*
            <SignIn />
            <Prompt />
            */}
            <RouteIndex/>
            </section>
        )
    }
}

export default Welcome
