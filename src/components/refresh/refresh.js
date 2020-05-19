import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {asyncRefresh} from "../../reducers/authSlice";
import authService from "../../services/tokenService";

// TODO
// timeToRefresh should be in the config file.
export default function JWTRefresher(props) {

    const dispatch = useDispatch();
    const refreshInterval = 180000;
    const tickInterval = 10000;
    const [timeToRefresh, setTimeToRefresh] = useState(refreshInterval);

    // this is a less than ideal solution, as every time we navigate, the element is reloaded
    // and the state is not preserved. not terrible though, as the response interceptor will
    // refresh the token if the request came back as a 401.
    useEffect(() => {
        const jwtRefreshInterval = setInterval(() => {
            if (timeToRefresh <= 0 && authService.hasValidRefreshToken()) {
                const tokenObject = {refresh: authService.getRefreshToken()};
                dispatch(asyncRefresh(tokenObject)).then(() => {
                        setTimeToRefresh(refreshInterval);
                    }
                );
            } else {
                setTimeToRefresh(timeToRefresh - tickInterval);
            }
        }, tickInterval);
        return () => clearInterval(jwtRefreshInterval);
    });

    return <div/>;
}