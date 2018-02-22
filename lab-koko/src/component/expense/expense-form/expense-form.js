import React from 'react';

class ExpenseForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      price: 0,
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event){
    this.setState({[event.target.name]: event.target.value})
    // this.setState({[event.target.name]: event.target.value})
  }
  handleSubmit(event){
    event.preventDefault()
    let expense = {...this.state}
    expense._id = Math.random().toString()
    this.props.dashboard.setState({expenses: [...this.props.dashboard.state.expenses, expense]})
    }
  render(){
    return(
      <form className='expense-form' onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='Name'
          value={this.state.name}
          onChange={this.handleChange}  
        />
        <input
          type='number'
          name='price'
          placeholder='price'
          value={this.state.price}
          onChange={this.handleChange}  
        />
        <button type='submit'> Create Expense </button>
      </form>
    );
  }
};

export default ExpenseForm;
// import React from 'react'

// class ExpenseForm extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       name: '',
//       price: 0,
//     }

//     this.handleChange = this.handleChange.bind(this)
//     this.handleSubmit = this.handleSubmit.bind(this)
//   }

//   handleChange(e) {
//     this.setState({[e.target.name]: e.target.value})
//   }

//   handleSubmit(e) {
//     e.preventDefault()
//     let expense = {...this.state}
//     expense._id = Math.random().toString()

//     this.props.dashboard.setState({expenses: [...this.props.dashboard.state.expenses, expense]})
//     // this.props.dashboard.setState(prevState => ({
//     //   expenses: [...prevState.expenses, expense]
//     // }))
//   }

//   render() {
//     return (
//       <form className="expense-create-form" onSubmit={this.handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           value={this.state.name}
//           onChange={this.handleChange}
//           placeholder="Bought Dan a new (Matchbox) car"/>

//         <input
//           type="number"
//           name="price"
//           value={this.state.price}
//           onChange={this.handleChange}
//           placeholder='3.50'/>

//         <button type="submit">Spend</button>

//         {/* <SomeComponent dashboard={this.props.dashboard}/> */}
//       </form>
//     )
//   }
// }

// export default ExpenseForm