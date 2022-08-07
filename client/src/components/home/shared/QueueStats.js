import React, { useState, useEffect } from "react";
import {
    CardContent, Divider, Stack, Typography,
} from "@mui/material";

import BaseCard from "../../common/cards/BaseCard";

import { socketSubscribeTo } from "../../../services/SocketsService";

export default function QueueStats(props) {
    const { queueData, queueFrozen } = props;

    const [numStudents, setNumStudents] = useState();
    const [waitTime, setWaitTime] = useState();

    useEffect(() => {
        socketSubscribeTo("waittimes", (data) => {
            setWaitTime(data.times);
        });
    }, []);

    useEffect(() => {
        if (queueData != null) {
            setNumStudents(queueData.numStudents);
            setWaitTime(queueData.waitTime);
        }
    }, [queueData]);

    return (
        <BaseCard>
            <CardContent>
                <Stack
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem/>}
                    spacing={2}
                    alignItems="center"
                    justifyContent="space-evenly"
                    sx={{ pt: 1 }}
                >
                    <div textAlign="center">
                        <Typography variant="h5" fontWeight="bold" sx={{ mt: 2 }}>The queue is</Typography>
                        {
                            queueFrozen ? 
                            <Typography color="red" variant="h5" fontWeight="bold" sx={{ mt: 1, mb: 2 }}>CLOSED</Typography>
                            : 
                            <Typography color="green" variant="h5" fontWeight="bold" sx={{ mt: 1, mb: 2 }}>OPEN</Typography>
                        }
                    </div>
                    <div>
                        <Typography variant="body1" sx={{ mt: 2 }}>There are <strong>{numStudents} students</strong> on the queue.</Typography>
                        <Typography variant="body1" sx={{ mt: 1.5, mb: 2 }}>The estimated wait time is <strong>{waitTime} minutes</strong> from the end of the queue.</Typography>
                    </div>
                </Stack>
            </CardContent>
        </BaseCard>
    );
}
