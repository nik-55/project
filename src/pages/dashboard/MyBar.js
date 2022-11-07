import React from 'react'
import { Line } from 'react-chartjs-2'

const MyBar = ({ lineData }) => {

    return (
        <>
            < Line data={{
                labels: lineData.labels,
                datasets: lineData.data
            }} options={{
                maintainAspectRatio: false
            }} />
        </>
    )
}

export default MyBar