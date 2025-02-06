import React from "react";
import Cookies from "js-cookie";
import conf from "../conf/main";
import ax, { axData } from "../conf/ax";
import { useNavigate } from "react-router";
import { useState } from "react";
import { Button, Form, Input, Alert, Checkbox } from "antd";

function Login() {
    const [isLoading, setIsLoading] = useState(false);
    const [errMsg, setErrMsg] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (formData) => {
        try {
            setIsLoading(true);
            setErrMsg(null);
            const response = await ax.post(conf.loginEndpoint, formData);
            axData.jwt = response.data.jwt;
            Cookies.set("token", axData.jwt, {
                expires: formData.remember ? 30 : null,
                path: "/",
            });
            const responseUser = await ax.get(conf.jwtUserEndpoint, { withCredentials: false });
            const role = responseUser.data.role.name;
        } catch (err) {
            setErrMsg(err.response.data.error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col gap-12 min-w-[400px]">
            <p className=" flex flex-col gap-3">
                <h1 className="text-4xl font-semibold flex flex-row">
                    Welcome Back<div className="text-[#4169E2]">!</div>
                </h1>
                <p className="text-xs text-gray-500">
                    Don't have an account?{" "}
                    <a
                        onClick={() => navigate("/register")}
                        className="text-[#4169E2] hover:text-blue-400 cursor-pointer transition-colors duration-200"
                    >
                        Register
                    </a>
                </p>
            </p>
            <Form
                onFinish={handleLogin}
                autoComplete="off"
                className="w-[100%]"
                style={{ justifyItems: "center" }}
                requiredMark={false}
                layout="vertical"
            >
                {errMsg && (
                    <Form.Item>
                        <Alert message={errMsg} type="error" />
                    </Form.Item>
                )}
                <Form.Item name="identifier" label="Email" rules={[{ required: true }]} style={{ width: "100%" }}>
                    <Input />
                </Form.Item>

                <Form.Item name="password" label="Password" rules={[{ required: true }]} style={{ width: "100%" }}>
                    <Input.Password />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" label={null} style={{ width: "100%" }}>
                    <Checkbox style={{ userSelect: "none" }}>Remember me</Checkbox>
                </Form.Item>

                <Form.Item style={{ width: "100%" }}>
                    <Button
                        style={{ width: "100%", height: "42px" }}
                        type="primary"
                        htmlType="submit"
                        loading={isLoading}
                    >
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Login;
