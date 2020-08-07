import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import dogIllustration from '../images/dog-illustration.svg';

function HomePage() {
	return (
		<Layout>
			<SEO keywords={[ `gatsby`, `tailwind`, `react`, `tailwindcss` ]} title="Home" />

			<section className="flex flex-col items-center md:flex-row">
				<div className="md:w-2/3 md:mr-8">
					<cite className="block mt-4 text-xs font-bold text-right uppercase">Welcome Home</cite>

					<figure className="w-2/3 md:w-1/3">
						<img alt="A dog relaxing" src={dogIllustration} />
					</figure>

					<blockquote className="pl-4 font-serif leading-loose text-justify border-l-4 border-gray-900">
						This is Home 
					</blockquote>
				</div>
			</section>
		</Layout>
	);
}

export default HomePage;
