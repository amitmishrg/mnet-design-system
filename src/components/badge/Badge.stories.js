import React from 'react';
import { Badge } from './Badge';

export default {
  title: 'Design System|Badge',
  parameters: {
    component: Badge,
    componentSubtitle:
      'Displays an image that represents a user or organization',
  },
};

export const allBadges = () => (
  <div>
    <Badge status="positive">Positive</Badge>
    <Badge status="negative">Negative</Badge>
    <Badge status="neutral">Neutral</Badge>
    <Badge status="error">Error</Badge>
    <Badge status="warning">Warning</Badge>
    <Badge status="positive">😀 with icon</Badge>
  </div>
);

allBadges.story = {
  name: 'all badges',
};

export const positive = () => <Badge status="positive">Positive</Badge>;
export const negative = () => <Badge status="negative">Negative</Badge>;
export const warning = () => <Badge status="warning">Warning</Badge>;
export const neutral = () => <Badge status="neutral">Neutral</Badge>;
export const error = () => <Badge status="error">Error</Badge>;

export const withIcon = () => <Badge status="warning">✔️ with icon</Badge>;

withIcon.story = {
  name: 'with icon',
};
