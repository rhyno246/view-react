import { Button, Input } from 'antd';
import Form from 'antd/lib/form/Form';
import { useAuth } from '../../contexts/AuthContext'
import React from 'react';

function ChangeFormik(props) {
    const { currentUser } = useAuth()
    const name = currentUser && currentUser.displayName
    return (
        <div className="ChangeFormik">
            <Form>
                <Input value = { name }/>
                <div style={{ marginTop : "20px" }}>
                    <Button type="primary" htmlType="submit">
                        Update profile
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export default ChangeFormik;