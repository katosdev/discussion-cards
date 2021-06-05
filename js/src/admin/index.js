import app from 'flarum/forum/app';
import Settings from './components/Settings';


app.initializers.add('dem13n/discussion/cards', () => {
  app.extensionData
    .for('dem13n-discussion-cards')
    .registerPage(Settings)
});

