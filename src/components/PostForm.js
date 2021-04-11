import React, { Component } from 'react'

class PostForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            title: ''
        }
    }

    submitHandler = e => {
        e.preventDefault()

        const {title} = this.state
        const newPost = {
            title, id: Date.now().toString()
        }

        console.log(newPost);
        
        this.setState( {title: ''} )
    }

    changeInputhandler = event => {
        this.setState(prev => ({...prev, ...{
            [event.target.name]: event.target.value
        } }))
    }


    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div className='form-group'>
                    <label  htmlFor='title'> Заголовок поста</label>
                    <input
                        type='text'
                        className='form-control'
                        id='title'
                        value={this.state.value}
                        name='title'
                        onChange={this.changeInputhandler}
                    />
                </div>
                <button className='btn btn-success' type='submit'>Создать</button>
            </form>
        )
    }
}

export default PostForm
