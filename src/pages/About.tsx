import React from "react";
import { MapPin } from "lucide-react";
import { Box, Typography, Button, Card, CardMedia, CardContent } from "@mui/material";

const locations = [
  {
    title: "Bengaluru office",
    timings: "Mon-Sat 9am to 5pm.",
    address: "100, Electronic City Phase-1, Bengaluru, Karnataka 560100 IN",
  },
  {
    title: "Head office",
    timings: "Mon-Sat 9am to 5pm.",
    address: "12th Main Rd, Indiranagar, Bengaluru, Karnataka 560008 IN",
  },
  {
    title: "Karnataka office",
    timings: "Mon-Sat 9am to 5pm.",
    address:
      "42, Residency Rd, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560025 IN",
  },
];

const users = [
  {
    name: "Gabrielle Fernandez",
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    position: "Marketing Lead",
  },
  {
    name: "Victória Silva",
    image:
      "https://images.generated.photos/vBRCiI_3UM4l40sU8s7fCwbJwzDwRTGpebzPkfHFsY4/rs:fit:512:512/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODgyMTAyLmpwZw.jpg",
    position: "Back-end developer",
  },
  {
    name: "Gabrielle Fernandez",
    image:
      "https://images.unsplash.com/photo-1549351512-c5e12b11e283?q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600",
    position: "Sales",
  },
  {
    name: "Sadie Lewis",
    image:
      "https://images.unsplash.com/photo-1485960994840-902a67e187c8?q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600",
    position: "Sales",
  },
  {
    name: "Thilde Olaisen",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=600&w=600",
    position: "Marketing Lead",
  },
  {
    name: "Deepika Ramesh",
    image:
      "https://images.generated.photos/lEhPUYYfYr9IOt13WZZGf2zbXZnCYdU1wUp7gcu_99c/rs:fit:512:512/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Njg5NTQ5LmpwZw.jpg",
    position: "Front-end developer",
  },
  {
    name: "Jordi Santiago",
    image:
      "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    position: "Front-end developer",
  },
  {
    name: "Kerim Fahri",
    image:
      "https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600",
    position: "Back-end developer",
  },
];

function About() {
  return (
    <Box textAlign="center" sx={{ px: 4, py: 4 }}>
      {/* Hero Map */}
      <Box sx={{ py: 12, mb: 10 }}>
        <Typography variant="h3" component="p" gutterBottom>
          Made with love, right here in India
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          veritatis voluptates neque itaque repudiandae sint, explicabo
          assumenda quam ratione placeat?
        </Typography>
      </Box>
      <Box sx={{ width: '100%', mb: 4 }}>
        <img
          src="https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/google-map.jpg"
          alt="Map"
          style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
        />
      </Box>
      {/* Locations */}
      <Box sx={{ my: 8, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6, justifyContent: 'space-around' }}>
        {locations.map((location) => (
          <Box key={location.title} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '20%' }}>
            <MapPin style={{ height: 24, width: 24 }} />
            <Typography variant="h6" component="p" sx={{ mt: 1, mb: 0.5 }}>
              {location.title}
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={{ mb: 0.5 }}>
              {location.timings}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {location.address}
            </Typography>
          </Box>
        ))}
      </Box>
      <hr style={{ margin: '40px 0' }} />
      {/* Greetings */}
      <Box sx={{ mt: 16 }}>
        <Typography variant="h3" component="p" gutterBottom>
          Meet our team
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Our philosophy is simple — hire a team of diverse, passionate
          people and foster a culture that empowers you to do your best
          work.
        </Typography>
      </Box>
      {/* Team */}
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr 1fr' }, gap: 6, py: 12 }}>
        {users.map((user) => (
          <Card key={user.name} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '12px', overflow: 'hidden' }}>
            <CardMedia
              component="img"
              image={user.image}
              alt={user.name}
              sx={{ width: '100%', height: 300, objectFit: 'cover' }}
            />
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h6" component="p" sx={{ mt: 2 }}>
                {user.name}
              </Typography>
              <Typography variant="body1" color="textSecondary" sx={{ mt: 1 }}>
                {user.position}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
      {/* Hiring Banner */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'center', gap: 4, py: 16 }}>
        <Box sx={{ textAlign: 'center', maxWidth: '50%' }}>
          <Typography variant="subtitle1" component="p" gutterBottom>
            Join our team &rarr;
          </Typography>
          <Typography variant="h3" component="p" gutterBottom>
            We&apos;re just getting started
          </Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            Our philosophy is simple — hire a team of diverse, passionate
            people and foster a culture that empowers you to do your best
            work.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Join Now
          </Button>
        </Box>
        <Box sx={{ width: '50%' }}>
          <img
            src="https://images.unsplash.com/photo-1605165566807-508fb529cf3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
            alt="Getting Started"
            style={{ width: '100%', borderRadius: '8px' }}
          />
        </Box>
      </Box>
      <hr style={{ marginTop: '24px' }} />
    </Box>
  );
}

export default About;
