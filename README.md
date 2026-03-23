[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/SMsT37Y5)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=23244132&assignment_repo_type=AssignmentRepo)
Mobile Navigation Assessment (20%)

Demonstrate your understanding of responsive design principles and navigation usability by coding a toggle-style navigation for small screens that transitions into a standard horizontal navigation layout on larger screens. You will apply semantic HTML, responsive CSS, and basic interactivity to ensure the navigation works effectively across different device widths.

You will submit your work via GitHub Classroom, adhering to version control best practices.

Requirements &amp; Build Instructions:
Use the provided Figma design as the visual reference for content, layout, and styling.
On small screens, the menu links should be hidden by default and revealed by tapping the menu button. Avoid pushing the content down when the menu opens.
On larger screens, the menu should be visible by default in a horizontal layout without the toggle button. There will be two breakpoints: first, to position the menu below the logo, and second, to position it between the logo and the shopping cart once there is enough space.
A third breakpoint will introduce a fixed-width container that keeps the content centered on the page at a maximum width of 1820px.

Write clean, semantic HTML for the header and main sections. Use a single nav element for all screen sizes. Add a menu button that toggles the navigation links on small screens.

Style the mobile layout first (starting at 320px). Style the navigation links, and then hide them by default. The user must be able to click the menu button (which includes the icon and text) to toggle the navigation links in and out of view. The transition between hidden and shown must be smooth (use CSS transitions or transform). The menu should open over the content below (it must not move or push the content inside the main) and just below the header. Make each anchor’s tap/click area the size of its containing list item (large enough for touch).

At the medium breakpoint (once there is enough room on the screen), the navigation should display horizontally without the need for a toggle button. Ensure spacing, alignment, and typography remain consistent with the Figma design. The logo and navigation should be left-aligned, while the shopping cart is positioned on the right side of the header, aligned with the baseline of the logo. The hover states for the anchor tags can be found in the Layers panel in Figma and toggled on to view. The order of the HTML elements may need to change; refer to Flexbox’s order property to achieve this. At this breakpoint, the content inside the <main> will be limited in width to improve readability.

Another adjustment will be needed at the wide breakpoint to allow the logo, navigation, and shopping cart to align along one row.

Finally, when the viewport reaches 1920px wide, the content should be contained within a fixed-width, centered container that is 1820px wide, with no left or right padding.




Submission:

Push the completed assessment to the GitHub classroom before the due date. Late pushes will be counted as late submissions and will not be accepted unless prior arrangements are made.</main># webd1003-assignment5
