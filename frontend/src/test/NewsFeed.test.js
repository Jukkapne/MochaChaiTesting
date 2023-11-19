// File: frontend/src/tests/NewsFeed.test.js

import { render, screen } from '@testing-library/react';
import NewsFeed from '../components/NewsFeed';

describe('NewsFeed Component', () => {
    it('should render news items', () => {
        render(<NewsFeed />);
        expect(screen.getByText('Latest Movie News')).toBeInTheDocument();
        // Add more assertions to test the rendering of news items
    });
});
