import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const ImageBackground = styled(BackgroundImage)`
  ${'' /* background-image: radial-gradient(yellow, orange, lightblue, lightgreen); */}
  ${'' /* background-image: url('/images/universe.jpg'); */}
  background-position: top 20% center;
  background-size: cover;
  + * {
    margin-top: 0;
  }
  height: 50vh;
`;

const TextBox = styled('div')`
  ${'' /* background-image: linear-gradient(to top, #ddbbffdd 2rem, #ddbbff00); */}
  background-image: radial-gradient(yellow, orange, lightblue, lightgreen);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  padding: 0 calc((100vw - 550px) / 2) 2rem;
  width: 100%;
  h1 {
    text-shadow: 1px 1px 34px #eeddff66;
    font-size: 2.25rem;
  }
  p,
  a {
    color: #222;
    margin-top: 0;
  }
  a {
    margin-top: 0.5 rem;
  }
`;

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "universe.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <ImageBackground Tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <TextBox>
        <h1>Blog Website + Gatsby &hearts;</h1>
        <p>
          Hello Everyone!! <Link to="/about">Learn about me &rarr;</Link>
        </p>
      </TextBox>
    </ImageBackground>
  );
};

export default Hero;
