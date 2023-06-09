import useForm from '@/hooks/useForm'
import { useNavigate } from 'react-router-dom'

export const Login = () => {

  const sendData = async() => {
    try {
      const response = await fetch('https://reqres.in/api/users?page=2')
      const responseJson = await response.json()
      const data = await responseJson.data
      console.log(data)

      // Validating
        data.map(user => {
          if(user.email == input.email){
            console.log('SI ESSSH')
            useNavigate('/dashboard')
          }
        })

    } catch (error) {
      console.log(error)
    }
  }

  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    email: '',
    password: ''
  })


  return (
    <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={input.email} onChange={handleInputChange}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={input.password} onChange={handleInputChange}/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

  )
}
