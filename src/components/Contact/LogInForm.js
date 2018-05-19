import React, {Component} from 'react'
import createForm from 'react-create-form'
 
class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
 
  async handleSubmit(event) {
    event.preventDefault()
    let formData = await this.props.getFormData()
    // make fetch request or dispatch redux/flux action
  }
 
  render() {
    let {onChange, form} = this.props
    return (
      <form
        autoComplete="off"
        onSubmit={this.handleSubmit}
        method="POST">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="username"
            value={form.username.value}
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={form.email.value}
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            type="message"
            name="message"
            row="4"
            value={form.message.value}
            onChange={onChange}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    )
  }
}
 
export default createForm(LoginForm, {
  username: {value: ''},
  email: {value: ''},
  message: {value: ''},
})