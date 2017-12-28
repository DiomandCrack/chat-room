import React from 'react'
import style from './style/style'
import Button from 'material-ui/Button'

const Prompt = () => {
    return(
        <div style={style.loginPromptCon}>
            <div style={style.loginPrompt}>
                <div style={{
                height: '3rem',
                lineHeight:'3rem',
                textAlign:'center',
            }}>brand</div>
                <div style={{
                    background:'#f1f2f3',
                    flex:1,
                    marginBottom:'3rem',
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'center',
                    justifyContent:'center'
                }}>
                    <Button style={{
                        width:'17.5rem',
                        background:'#3a3133',
                        color:'#fff',
                        fontSize:'0.75rem',
                        borderRadius:'0.4rem'
                    }}>SIGN IN WITH WITH GITHUB</Button>
                    <div style={{fontSize:'0.8rem',lineHeight:'3em',}}>
                        <span>需要同意我们的</span>
                        <a href="">
                        条款
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prompt
