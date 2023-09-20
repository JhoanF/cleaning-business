import Container from '@/components/container'
import TypewriterAnimation from '@/components/typwriteranimation'
import React from 'react'

function ComingSoon() {
    return (
        <Container>
            <div className="flex flex-col items-center justify-center h-screen px-10">
                <h1 className="text-4xl md:text-8xl font-bold">Coming Soon</h1>
                <TypewriterAnimation words={["Good ", "things come ", "to those ", "who ", "wait."]} />
                {/* <p className="text-2xl mt-4">Good things come to those who wait.</p> */}
            </div>
        </Container>
    )
}

export default ComingSoon