import React from 'react';
import Home from './components/Home';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Logic from './components/Logic';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';
import Repo from './components/Repo';

// Error Boundary
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }

}


const App = () => {


  return (

    <ErrorBoundary>

      <BrowserRouter>
        <NavBar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/repositories" element={<Logic />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/repo/:reponame" element={<Repo />} />
        </Routes>
      </BrowserRouter>

    </ErrorBoundary>

  );

};

export default App;
