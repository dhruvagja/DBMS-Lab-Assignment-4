import React from 'react';

function Signup() {
    return (
        // Your Signup component JSX here
        <div>
            <h2>Signup</h2>
            <form>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required />
                <button type="submit">Signup</button>
            </form>
        </div>
    );
}

export default Signup; 