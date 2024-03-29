import {
	Tabs,
	TabList,
	Tab,
	TabPanels,
	TabPanel,
	UnorderedList,
	ListItem,
	HStack,
	Center,
	Text,
	Wrap,
	Tag,
	TagLabel,
	Flex,
	Heading,
	Box
} from '@chakra-ui/react';
import { HOME_PAGE_DATA as data } from '../../constants';

export const Experiences = () => {
	return (
		<Flex flexDir="column" gap={8} w={"100%"}>
			<Heading fontSize="x-large">Experience</Heading>
			<Center>
				<Tabs colorScheme="red" isFitted w={{ base: '100%', md: "xl" }}>
					<TabList flexDirection={{ base: 'column', lg: 'row' }}>
						{data.experiences.map((exp) => {
							return (
								<Tab key={exp.company} fontSize="sm">
									{exp.company}
								</Tab>
							);
						})}
					</TabList>
					<TabPanels>
						{data.experiences.map((exp) => {
							return (
								<TabPanel key={exp.company}>
									<Experience
										bullets={exp.bullets}
										role={exp.role}
										date={exp.date}
										tags={exp.tags}
									/>
								</TabPanel>
							);
						})}
					</TabPanels>
				</Tabs>
			</Center>
		</Flex>
	);
};

const Experience = ({ bullets, role, date, tags }) => {
	return (
		<Flex flexDir="column">
			<Center paddingBottom={6}>
				<HStack spacing="auto" w="100%">
					<Text fontSize={{ base: "sm", lg: "md" }} fontWeight="bold">{role}</Text>
					<Box minW={10} />
					<Text fontSize={{ base: "sm", lg: "md" }} fontWeight="bold">{date}</Text>
				</HStack>
			</Center>
			<UnorderedList spacing={6}>
				{bullets.map((bullet) => {
					return <ListItem key={bullet}>{bullet}</ListItem>;
				})}
			</UnorderedList>
			<Wrap justifyContent="left" alignItems="start" paddingTop={6}>
				{tags.map((tag) => {
					return (
						<Tag colorScheme="red" key={tag} size="lg" borderRadius="none">
							<TagLabel>{tag}</TagLabel>
						</Tag>
					);
				})}
			</Wrap>
		</Flex>
	);
};
