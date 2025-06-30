import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// Angular Material Imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatDividerModule,
    MatTooltipModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  title = 'StreamHub - Premium Music Streaming';

  quickAccessItems = [
    { title: 'Liked Songs', subtitle: '143 songs • 8.5 hours', icon: 'favorite', color: '#1db954' },
    { title: 'Discover Weekly', subtitle: '30 fresh tracks', icon: 'explore', color: '#8b5cf6' },
    { title: 'Daily Mix 1', subtitle: 'Pop, Electronic vibes', icon: 'history', color: '#f59e0b' }
  ];

  featuredItems = [
    {
      title: 'Ultimate Summer Hits',
      artist: 'Various Artists',
      description: 'The hottest tracks to soundtrack your summer adventures',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop'
    },
    {
      title: 'Midnight Chill',
      artist: 'Ambient Collective',
      description: 'Perfect ambient soundscapes for late night focus sessions',
      image: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=400&h=400&fit=crop'
    },
    {
      title: 'Workout Beast Mode',
      artist: 'Energy Mix',
      description: 'High-octane beats to fuel your most intense workouts',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop'
    }
  ];

  musicLibrary = [
    { title: 'Blinding Lights', artist: 'The Weeknd', duration: '3:20' },
    { title: 'Shape of You', artist: 'Ed Sheeran', duration: '3:53' },
    { title: 'Someone Like You', artist: 'Adele', duration: '4:45' },
    { title: 'Watermelon Sugar', artist: 'Harry Styles', duration: '2:54' },
    { title: 'Levitating', artist: 'Dua Lipa', duration: '3:23' },
    { title: 'Good 4 U', artist: 'Olivia Rodrigo', duration: '2:58' },
    { title: 'Stay', artist: 'The Kid LAROI & Justin Bieber', duration: '2:21' }
  ];

  trendingItems = [
    {
      title: 'Viral TikTok Hits',
      artist: 'Trending Now',
      plays: '2.4M',
      description: 'The songs everyone is dancing to right now',
      image: 'https://images.unsplash.com/photo-1611339555312-e607c8352fd7?w=400&h=400&fit=crop'
    },
    {
      title: 'New Music Friday',
      artist: 'Fresh Releases',
      plays: '1.8M',
      description: 'This week\'s biggest new releases from top artists',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop'
    },
    {
      title: 'Global Top 50',
      artist: 'World Charts',
      plays: '5.2M',
      description: 'The most played songs around the world today',
      image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop'
    }
  ];
}
