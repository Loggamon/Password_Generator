PASSWORD-GENERATOR!

My Assignment:

    My assignment this time was to update a URL with js, so that the password generator already coded in HTML/CSS actually ran a program!

    --WHEN I click the button to generate a password
        THEN I am presented with a series of prompts for password criteria

        For this part; it is asking for window alerts to pop up on the screen, so that the user can interact with the program!


    --WHEN prompted for password criteria
        THEN I select which criteria to include in the password

        Each window prompt is tied to a if/else function within the JS; the 'okay is considered "true", and 'cancel' is considered "false".


    --WHEN prompted for the length of the password
        THEN I choose a length of at least 8 characters and no more than 128 characters

        When this prompt is triggered, and input is requested, at which point an if/else if/else function is run;

                If the number is less than 8 or more than 128, it returns an error message, asking to start over.
                If the input is <= to 128 AND >= 8, it will continue the function.

        This value is saved for later use.


    --WHEN asked for character types to include in the password
        THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

            This triggers an if/else statement tor truth-iness: 'true' will add that character array to the password pool. If 'false', it will skip adding it!


    --WHEN I answer each prompt
        THEN my input should be validated and at least one character type should be selected

            This if/else statement is going to check if there are any values in my password pool array. If this password pool is less than 1 character, it will throw an error message; prompting to start over!


    --WHEN all prompts are answered
        THEN a password is generated that matches the selected criteria

            At this point, my password array of character arrays is flattened into a single array.
            It is then run through a random-pull function, specifically multiplied by the requested character length that we catalogued before.

            This will spit out a new array, named, "newPassword"!


    --WHEN the password is generated
        THEN the password is either displayed in an alert or written to the page 

        At this point, the "newPassword" array is joined ( . join() ) and then returned to the password-box listed in the HTML!

Things to note!!

--When the function is finished, the arrays we chose to include don't get automatically removed. 
--To fix this, we include the "paswordPool" and "newPassword" var at the top of the function. Whenever the function is run again, the listed variables are reset to be empty again!

--I made sure to console log all of the values used, so you can see which arrays are being pooled at any time, as well as the final list of potential characters used for the final password creation!

