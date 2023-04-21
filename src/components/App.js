import React from 'react';
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';
import data from '../data/blog';

function App() {
  return (
    <div className="App">
      <Header blogName={data.name} />
      <main>
        <About image={data.image} aboutText={data.about} />
        <ArticleList articles={data.posts} />
      </main>
    </div>
  );
}

export default App;
