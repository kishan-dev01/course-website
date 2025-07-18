import React from 'react'
import styled from 'styled-components'

// --- STYLED COMPONENTS ---

const SolutionsContainer = styled.section`
  background-color: #f0f2f5; // Light grey background
  padding: 4rem 2rem;
  font-family: 'Arial', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SectionHeader = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-bottom: 2.5rem;
  text-align: left;
`

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  color: #333;
  margin: 0;
  font-weight: normal;

  strong {
    font-size: 2rem;
    color: #000080; // Navy blue color
    display: block;
    font-weight: bold;
  }
`

const SectionSubTitle = styled.p`
  font-size: 1rem;
  color: #555;
  margin-top: 0.5rem;
`

const SolutionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 1200px;
`

const SolutionCard = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
  display: flex;
  overflow: hidden;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  }
`

const CardImage = styled.div`
  flex-shrink: 0;
  width: 200px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
`

const CardContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
`

const CardTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin: 0 0 0.75rem 0;
`

const CardDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  line-height: 1.5;
  margin: 0 0 1.5rem 0;
  flex-grow: 1;
`

const KnowMoreButton = styled.a`
  display: inline-block;
  background-color: #d9534f; // Red color from screenshot
  color: #ffffff;
  padding: 0.6rem 1.2rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;
  align-self: flex-start;

  &:hover {
    background-color: #c9302c;
  }
`

// --- MOCK DATA ---
const solutions = [
  {
    title: 'Organisational Development Consulting',
    description:
      'A bouquet of services to help organisations reinvent their people, processes, and organisational goals to rema...',
    imageUrl: 'https://placehold.co/400x400/d7d7d7/333?text=Consulting',
  },
  {
    title: 'Executive Education @ Work',
    description:
      'Executive Education @ Work by TimesPro offers customised corporate training solutions to organisations to enge...',
    imageUrl: 'https://placehold.co/400x400/c7c7c7/333?text=Education',
  },
  {
    title: 'Learning Experience Platform (LXP)',
    description:
      'Our LXP’s help you engage your workforce with learning interventions based on compelling content designed to be...',
    imageUrl: 'https://placehold.co/400x400/b7b7b7/333?text=LXP',
  },
  {
    title: 'Content Solutions',
    description:
      'TimesPro’s content creation services leverage its expertise and experience in developing over 18,000 hours of...',
    imageUrl: 'https://placehold.co/400x400/a7a7a7/333?text=Content',
  },
  {
    title: 'Technology Programmes',
    description:
      'TimesPro’s technology training programmes service specific needs of corporates to train their teams on emergin...',
    imageUrl: 'https://placehold.co/400x400/979797/333?text=Tech',
  },
  {
    title: 'L&D Solutions',
    description:
      'Our range of process-driven and outcome-based Learning and Development interventions are carefully crafted to...',
    imageUrl: 'https://placehold.co/400x400/878787/333?text=L%26D',
  },
]

// --- MAIN COMPONENT ---
const EnterpriseSolutions = () => {
  return (
    <SolutionsContainer>
      <SectionHeader>
        <SectionTitle>
          Achieve organisational growth with
          <strong>Enterprise Solutions</strong>
        </SectionTitle>
        <SectionSubTitle>
          Customised learning solutions to empower talent and drive business objectives
        </SectionSubTitle>
      </SectionHeader>
      <SolutionsGrid>
        {solutions.map((solution, index) => (
          <SolutionCard key={index}>
            <CardImage src={solution.imageUrl} />
            <CardContent>
              <CardTitle>{solution.title}</CardTitle>
              <CardDescription>{solution.description}</CardDescription>
              <KnowMoreButton href="#">Know More →</KnowMoreButton>
            </CardContent>
          </SolutionCard>
        ))}
      </SolutionsGrid>
    </SolutionsContainer>
  )
}

export default EnterpriseSolutions
