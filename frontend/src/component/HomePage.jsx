import React from 'react';
import MainMenu from './MainMenu';

const HomePage = () => {
  return (
    <div className="home-page">
      <header>
        <MainMenu/>
        <h1>Welcome to My Website</h1>
      </header>
      <main>
        <section>
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna eu ligula sagittis
            semper. Praesent elementum, libero eget dignissim fermentum, velit nisl cursus purus, vel
            ullamcorper turpis lorem et ex.
          </p>
        </section>
        <section>
          <h2>Projects</h2>
          <p>
            Check out my awesome projects! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            non urna eu ligula sagittis semper.
          </p>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
