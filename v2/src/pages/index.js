import { VStack, Grid } from '@chakra-ui/react';
import { Greeting } from '../components/home/Greeting';
import { Experiences } from '../components/home/Experiences';
import { Skills } from '../components/home/Skills';
import { SectionHeader } from '../components/SectionHeader';
import { AboutMe } from '../components/home/AboutMe';
import { Projects } from '../components/home/Projects';
import Head from 'next/head';
import { UIWrapper } from '../components/wrappers/UIWrapper';

export default function Home() {
	return (
		<>
			<Head>
				<title>Jackson Taylor</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<UIWrapper home>
				<VStack spacing={24}>
					<Greeting paddingBottom={24} />
					<Grid
						w="100%"
						templateColumns={{
							lg: '1fr 3fr',
							base: '1fr',
						}}
						gap={{ lg: 24, base: 12 }}
					>
						<SectionHeader heading="About me" />
						<AboutMe />
						<SectionHeader heading="Projects" />
						<Projects />
						<SectionHeader heading="Experience" />
						<Experiences />
						<SectionHeader heading="Skills" />
						<Skills />
					</Grid>
				</VStack>
			</UIWrapper>
		</>
	);
}
