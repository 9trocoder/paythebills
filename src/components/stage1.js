import React, { useState, useContext, useRef } from 'react';
import { Button, Form, Alert } from  'react-bootstrap';
import { AppContext } from '../context';

const Stage1 = () => {
  const textInput = useRef();
  const context = useContext(AppContext);
  const [error, setError] = useState([false, ''])

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = textInput.current.value;
    const validate = inputValidation(value);

    if(validate) {
      // form is valid ..add player
      setError([false, '']);
      context.addPlayer(value)
      textInput.current.value = ''
    }
  }

  const inputValidation = (value) => {
    if(value === '') {
      setError([true, 'Sorry, you need to add a name']);
      return false;
    }
    if(value.length <= 2) {
      setError([true, 'Sorry, you need 3 characters']);
      return false;
    }
    return true;
  }

  console.log(context)

  return (
    <>
      <Form onSubmit={handleSubmit} className="mt-4">
        <Form.Group>
          <Form.Control 
            type="text"
            placeholder="Type a name...."
            name="player"
            ref={textInput}
          />
        </Form.Group>
        {
          error[0] ? <Alert variant="danger">{error[1]}</Alert> : null
        }

        <Button className="miami" variant="primary" type="submit">
          Add player
        </Button>
        {
          context.state.players && context.state.players.length > 0 ?
           <>
           
           </>
          : null
        }
      </Form>
    </>
  );
}

export default Stage1;