import React, { useContext, useState, useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import firebaseAPIContext from '../context/AuthContext';
import Navbar from '../components/Container/Navbar';


import { db } from '../firebase'

function ProtectedRoute({ component: Component, ...rest }) {
    const authAPI = useContext(firebaseAPIContext);


    // TEST
    const GetMember = (name) => {
        function check(input1, input2) {
            if(input1.length > input2.length) { return false; }
            for(let i = 0; i < input1.length; i += 1) {
                if(input1[i] !== input2[i]) { return false; }
            }
            return true;
        }
        const ref = db.collection('members');

        ref.get()
           .then((item) => {
            const people = [];
            item.forEach((doc) => {
                const fullName1 = doc.data().name.first + doc.data().name.last;
                const fullName2 = doc.data().name.last + doc.data().name.first;
                if(check(name.toLowerCase(), fullName1.toLowerCase())) {
                    people.push(doc.data());
                } else if(check(name.toLowerCase(), fullName2.toLowerCase())) {
                    people.push(doc.data());
                }
            });
            console.log(people);
        })
           .catch((err) => {
               console.log(err);
           });
    }

    useEffect(() => {
        GetMember('ch');
    }, [])
    // END TEST


    return (
        <Route
            {...rest}
            render={(props) =>
                authAPI.user ? (
                    <Navbar>
                        <Component {...rest} {...props} />
                    </Navbar>
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
}

ProtectedRoute.propTypes = {
    component: PropTypes.node,
};

export default ProtectedRoute;
