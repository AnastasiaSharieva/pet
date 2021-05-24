import React from 'react';

import { SAuthorization, SForm, SInput, SButton } from './Authorization_styled';


const Authorization = () => {
    return (
        <SAuthorization>
            <SForm>
                <SInput type="text" name="name" />
                <SInput type="text" name="familie" />
                <SButton> Send </SButton>
            </SForm>
        </SAuthorization>
    );
}

export default Authorization;