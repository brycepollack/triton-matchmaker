
import { Box, Heading, Text, Flex, Button, IconButton, Spacer } from '@chakra-ui/react';
import { useState } from 'react';

type QuestionnaireItemProps = {
  question: string;
  onAnswer: (answer: number) => void;
}

const QuestionnaireItem = ({ question, onAnswer }: QuestionnaireItemProps) => {
  const [answer, setAnswer] = useState<number | null>(null);

  const handleInputChange = (value: number) => {
    setAnswer(value);
    onAnswer(value);
  };

  return (
    <Box p={4} borderWidth="1px" borderRadius="md" boxShadow="md">
      <Heading as="h3" size="md" mb={4} textAlign="center">
        {question}
      </Heading>
      <Flex alignItems="center">
        <Text ml={2} mr={2}>Agree</Text>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
            <Button
                key={value}
                aria-label={`${value} rating`}
                colorScheme={answer === value ? 'teal' : 'gray'}
                onClick={() => handleInputChange(value)}
                borderRadius="full"
                ml={1}
                mr={1}
            />
        ))}
        <Text ml={2} mr={2}>Disagree</Text>
      </Flex>
    </Box>
  );
};

export default QuestionnaireItem;