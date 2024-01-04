import { Input, Box, Heading, Text, Flex, Button, IconButton, Spacer } from '@chakra-ui/react';
import { useState } from 'react';

type QuestionnaireItemProps = {
  question: string;
  onAnswer: (answer: string) => void;
}

const UserInputItem = ({ question, onAnswer }: QuestionnaireItemProps) => {
    const [answer, setAnswer] = useState<string>('');
    const [validAnswer, setValidAnswer] = useState<boolean>(true);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAnswer(event.target.value);

        if(question === "What's your UCSD email?"){
            if (event.target.value.endsWith('@ucsd.edu')) {
                // Handle the case where the input ends with '@ucsd.edu'
                setValidAnswer(true);
                onAnswer(event.target.value);
            } else {
                // Handle the case where the input does not end with '@ucsd.edu'
                setValidAnswer(false);
            }
        }
        else{
            onAnswer(event.target.value); 
        }
    };

    return (
        <Box p={4} borderWidth="1px" borderRadius="md" boxShadow="md">
            <Heading as="h3" size="md" mb={4} textAlign="center">
                {question}
            </Heading>
            <Flex alignItems="center">
                <Input
                type="text"
                value={answer}
                onChange={handleInputChange}
                placeholder="Type your answer here"
                borderRadius="md"
                mr={2}
                />
            </Flex>
            {!validAnswer && (
                <Text color="red" ml={2} mr={2} mt={2}>
                Please enter a valid UCSD email address
                </Text>
            )}
        </Box>
    );
};

export default UserInputItem;