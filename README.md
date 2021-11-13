# Summary

I spent about 3 hours on this challenge. A huge majority of that time was spent researching things I was unfamiliar with like socket.io and testing using jest vs cypress. In the end, I decided it would be best to just style as much as I could to have a fair representation of the amount of work I could do in 3 hours.

1. I spent a lot of time trying to figure out how to run socket.io so that I could simulate a conversation. I understood that the assignment was to redesign the front end, but in some of the mockups, I saw there was an actual conversation taking place. In my mind, that meant I needed to create a conversation and style those screens as well. After speaking with the recruiter, she confirmed that I did not need to create my own data. I was able to move past researching this.
2. Grid. I spent a while looking at videos to make sure I was creating my grid properly. I like that the elements on the page became responsive by default. I was able to resize the screen and the elements still only took up the specified grid columns or they moved to the next line.
3. Material Icons! I could not get the icons to work using the tag on the page. The instructions said to import the font as usual, but when I went to search for the font, it said the font was not there. I used the svgs instead and changed the fill path to match the right colors.
4. Importing style modules was new to me but that took no time to figure out. I’m used to using styled components but I wanted to implement the modules to follow the format of the other files.
5. Testing -  I did not include test coverage. After researching, I tried to implement what I had seen on Jest tutorials and my test kept failing. I do intend to learn more about testing in React—I’d only ever conducted unit tests in C# prior to this. I did not want to take too much more time from other aspects of the challenge to write out all the tests.

All in all, I enjoyed this challenge. I followed the spacing in the mockup as closely as I could. The design looks good on desktop and tablet. I like that there are new things that I will have in my coding toolbox for the future like style modules and grid (and eventually testing once I learn better ways to implement them!)

## Screenshots
### Desktop Verson & Desktop w/ Modal
<img width="1275" alt="Jeressia-Guild-Desktop" src="https://user-images.githubusercontent.com/43094838/141654417-f259bbbb-29ec-49ba-a449-289828e567c0.png">
<img width="1276" alt="Screen Shot 2021-11-13 at 12 09 30 PM" src="https://user-images.githubusercontent.com/43094838/141654613-eb8ea9a9-23ce-48b6-9e6a-81aa5a9fdd30.png">

### Large Tablet Version & Large Tablet Version w/ Modal 1024 x 1366
<img width="429" alt="Jeressia-Guild-Ipad" src="https://user-images.githubusercontent.com/43094838/141654425-17219390-ab6c-4dd0-946e-1f8ca1ad01ef.png">
<img width="427" alt="Screen Shot 2021-11-13 at 12 09 02 PM" src="https://user-images.githubusercontent.com/43094838/141654644-8b29cc78-0a33-4e8c-8864-b3c1f48b0fd6.png">


### Small Tablet Version & Small Tablet Version w/ Modal 768 x 1024
<img width="380" alt="Jeressia-Guild-IpadPro" src="https://user-images.githubusercontent.com/43094838/141654423-a90e88c7-9ff2-4855-9241-5c986bb6b05f.png">
<img width="383" alt="Screen Shot 2021-11-13 at 12 09 10 PM" src="https://user-images.githubusercontent.com/43094838/141654653-ff239f0a-0020-48e4-b78c-4fbc3bb7f468.png">

## To run this:
* git clone this repo
* npm install
* run `yarn start`
* Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## To test this run:
* run `yarn test`

You can run this to see my one and only test fail! >_<
I added the --coverage flag to my package.json so it does show coverage report but that is it.
