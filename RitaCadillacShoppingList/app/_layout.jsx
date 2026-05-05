import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

export default function RootLayout() {
    return (
        <>
            <Stack>
                <Stack.Screen name='index' options={{ HeaderShow: false }} />
                <Stack.Screen name='home' options={{ HeaderShow: false }} />
            </Stack>
            <StatusBar style='light' />

        </>
    )
}