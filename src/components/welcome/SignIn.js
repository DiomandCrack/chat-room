import React from 'react'
import style from './style/style'

import Button from 'material-ui/Button'

import {Link} from 'react-router-dom'

const SignIn = () => {
        return(
            <div style={style.login}>
                <h2 style={style.loginTitle}>Where developers come to talk.</h2>
                <Link to='/regi'><Button raised  style={style.loginBtn}>
                    开始注册
                </Button></Link>
            </div>
        )
}

export default SignIn
