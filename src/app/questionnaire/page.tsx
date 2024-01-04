"use client";

import { Button, Box, Heading, SimpleGrid, Text, useColorModeValue, Container, VStack, Flex } from "@chakra-ui/react";
import { useState, useEffect, useRef } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

import { Hero, Section } from "@/components/Layout";
import { DynamicNavbar } from "@/components/Navbar";
import { UserInputItem, RatingItem }  from '@/components/Questionnaire';

const Questionnaire = () => {

	const [userInfo, setUserInfo] = useState<{ [key: string]: string | null }>({});
	const [userAnswers, setUserAnswers] = useState<{ [key: string]: number | null }>({});
	const [partnerAnswers, setPartnerAnswers] = useState<{ [key: string]: number | null }>({});
	const [numAnsweredQuestions, setNumAnsweredQuestions] = useState(0);

	const userInfoQuestions = [
		"What's your name?",
		"What's your UCSD email?",
	];

	const questions = [
		"You exercise often",
		"You drink alcohol often",
		"You consume nicotine, cannabis, or other drugs often",
		"You clean your living space often",
		"You prefer going to parties over staying in for the night",
		"You prefer eating out over cooking at home",
		"You prefer indoor activities to outdoor activities",
		"Family plays an important role in my life",
		"Religion or spirituality plays an important role in my life",
	];

	const progressBarPercentage = (numAnsweredQuestions / (questions.length * 2)) * 100;

	const handleUserInputAnswer = (question: string, answer: string) => {
		setUserInfo((prevAnswers) => ({
		  ...prevAnswers,
		  [question]: answer,
		}));
	};

	const handleRatingAnswer = (question: string, answer: number, type: number) => {
		switch (type) {
			case 0: // user
				if(userAnswers[question] === undefined){
					setNumAnsweredQuestions(numAnsweredQuestions + 1);
				}
				setUserAnswers((prevAnswers) => ({
					...prevAnswers,
					[question]: answer,
				}));
			case 1: // partner
				if(partnerAnswers[question] === undefined){
					setNumAnsweredQuestions(numAnsweredQuestions + 1);
				}
				setPartnerAnswers((prevAnswers) => ({
					...prevAnswers,
					[question]: answer,
				}));
		}
	};

	const handleSubmit = () => {
		// Replace this with your actual API call to send answers to the database
		console.log('User Info:', userInfo);
		console.log('User answers:', userAnswers);
		console.log('Partner answers:', partnerAnswers);
	};

    return (
        <>
        <Box position="relative">
            <Box
            position="absolute"
            insetX={0}
            top={-40}
            zIndex={-10}
            overflow="hidden"
            aria-hidden="true"
            filter="auto"
            blur="10rem"
            >
            <Box
                position="relative"
                left={["calc(50%-11rem)", "calc(50%-30rem)"]}
                aspectRatio="1155/678"
                w={["36.125rem", "72.1875rem"]}
                transform="translateX(-50%) rotate(30deg)"
                clipPath="polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                bgGradient={useColorModeValue(
                "linear(to-tr, #ff80b5, #9089fc)",
                "linear(to-tr, #4f46e5, #80caff)"
                )}
                opacity={0.3}
            />
            </Box>
            
            <DynamicNavbar progressBar={true} progressBarPercentage={progressBarPercentage} tabs={[]} />
            
        </Box>

        <Section id="user-info" variant="container">
            <Heading as="h1" size="xl" mb={8}>
            User Info
            </Heading>

			<Container maxW="xl" centerContent>
				<VStack spacing={8} align="stretch" minW="100%">
					{userInfoQuestions.map((question) => (
					<UserInputItem
						key={question}
						question={question}
						onAnswer={(answer: string) => handleUserInputAnswer(question, answer)}
					/>
					))}
				</VStack>
			</Container>
        </Section>

		<Section id="question-section-1" variant="container">
			<Heading as="h1" size="xl" mb={8}>
            Lifestyle
            </Heading>

			<Container maxW="xl" centerContent>
				<VStack spacing={8} align="stretch">
				{questions.map((question) => (<>
				
					<Heading as="h3" size="md" mb={4} textAlign="center">{question}</Heading>
					<Flex justify="space-around">
						<RatingItem
						// key={question}
						title={"My answer"}
						onAnswer={(answer: number) => handleRatingAnswer(question, answer, 0)}
						/>
						<RatingItem
						// key={question}
						title={"Partner answer"}
						onAnswer={(answer: number) => handleRatingAnswer(question, answer, 1)}
						/>
					</Flex></>
				))}</VStack>
			</Container>
		</Section>

        <Button onClick={handleSubmit}>
			Submit
		</Button>
        </>
    );
};

export default Questionnaire;

