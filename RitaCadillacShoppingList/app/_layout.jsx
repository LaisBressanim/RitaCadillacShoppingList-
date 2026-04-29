import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

export default function RootLayout() {
    return (
        <>
            <Stack>
                <Stack.Scream name='index' options={{ HeaderShow: false }} />
                <Stack.Scream name='home' options={{ HeaderShow: false }} />
            </Stack>
            <StatusBar style='light' />

        </>
    )
}