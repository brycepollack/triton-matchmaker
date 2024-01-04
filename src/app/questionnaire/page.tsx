"use client";

import { Button, Box, Heading, SimpleGrid, Text, useColorModeValue, Container, VStack, Flex, Progress } from "@chakra-ui/react";
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
	const [progress, setProgress] = useState(0)

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

	const handleUserInputAnswer = (question: string, answer: string) => {
		setUserInfo((prevAnswers) => ({
		  ...prevAnswers,
		  [question]: answer,
		}));
	};

	const handleRatingAnswer = (question: string, answer: number, type: number) => {
		switch (type) {
			case 0: // user
				console.log("here 0")
				if(userAnswers[question] === undefined){
					updateProgress()
				}
				setUserAnswers((prevAnswers) => ({
					...prevAnswers,
					[question]: answer,
				}));
				return
			case 1: // partner
				console.log("here 1")
				if(partnerAnswers[question] === undefined){
					updateProgress()
				}
				setPartnerAnswers((prevAnswers) => ({
					...prevAnswers,
					[question]: answer,
				}));
				return
		}
	};

	const updateProgress = () => {
		console.log("hit")
		let temp = numAnsweredQuestions + 1
		setNumAnsweredQuestions(temp)
		setProgress((temp / (questions.length * 2)) * 100)
	}

	const handleSubmit = () => {
		// Replace this with your actual API call to send answers to the database
		console.log('User Info:', userInfo);
		console.log('User answers:', userAnswers);
		console.log('Partner answers:', partnerAnswers);
	};

    return (
        <>
        <DynamicNavbar progressBar={true} progress={progress} tabs={[]} />
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
				<VStack spacing={16} align="stretch">
				{questions.map((question) => (<>
				
					<VStack spacing={4} align="stretch">
					<Heading as="h3" size="md" mb={4} textAlign="center" marginBottom={0}>{question}</Heading>
					<Flex justify="space-around" gap="6">

						<RatingItem
						key={`${question}-0`}
						title={"My answer"}
						onAnswer={(answer: number) => handleRatingAnswer(question, answer, 0)}
						/>

						<RatingItem
						key={`${question}-1`}
						title={"Partner answer"}
						onAnswer={(answer: number) => handleRatingAnswer(question, answer, 1)}
						/>
						
					</Flex>
					</VStack>
					</>
				))}</VStack>
			</Container>
		</Section>

		<Section id="submit-section">
			<Container centerContent>
			<Button onClick={handleSubmit} colorScheme="teal">
				Submit
			</Button>
			</Container>
		</Section>
        </>
    );
};

export default Questionnaire;

