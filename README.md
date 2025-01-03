# Rain
import pygame
import random

# Initialize Pygame
pygame.init()

# Grid dimensions
GRID_WIDTH = 15
GRID_HEIGHT = 20
SQUARE_SIZE = 30

# Screen dimensions
SCREEN_WIDTH = GRID_WIDTH * SQUARE_SIZE
SCREEN_HEIGHT = GRID_HEIGHT * SQUARE_SIZE

# Colors
BLACK = (0, 0, 0)
WHITE = (255, 255, 255)

# Function to generate random colors
def random_color():
    return (random.randint(50, 255), random.randint(50, 255), random.randint(50, 255))

# Set up the screen
screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
pygame.display.set_caption("Falling Rain in Grid")

# Clock to control frame rate
clock = pygame.time.Clock()

# Initialize raindrops
raindrops = [
    {"x": random.randint(0, GRID_WIDTH - 1), "y": random.randint(0, GRID_HEIGHT - 1), "color": random_color()}
    for _ in range(30)  # Number of raindrops
]

# Main game loop
running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    # Clear the screen
    screen.fill(BLACK)

    # Draw the grid
    for row in range(GRID_HEIGHT):
        for col in range(GRID_WIDTH):
            rect = pygame.Rect(col * SQUARE_SIZE, row * SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE)
            pygame.draw.rect(screen, WHITE, rect, 1)  # Draw grid square borders

    # Update and draw raindrops
    for drop in raindrops:
        drop_rect = pygame.Rect(
            drop["x"] * SQUARE_SIZE + SQUARE_SIZE // 4,  # Center the raindrop horizontally
            drop["y"] * SQUARE_SIZE + SQUARE_SIZE // 4,  # Center the raindrop vertically
            SQUARE_SIZE // 2,  # Width of raindrop
            SQUARE_SIZE // 2,  # Height of raindrop
        )
        pygame.draw.ellipse(screen, drop["color"], drop_rect)

        # Move the raindrop down
        drop["y"] += 1

        # Reset the raindrop to the top if it goes off the screen
        if drop["y"] >= GRID_HEIGHT:
            drop["y"] = 0
            drop["x"] = random.randint(0, GRID_WIDTH - 1)
            drop["color"] = random_color()

    # Update the display
    pygame.display.flip()

    # Cap the frame rate
    clock.tick(10)

# Quit Pygame
pygame.quit()
