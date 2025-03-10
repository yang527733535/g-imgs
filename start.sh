docker run -d \
  --name next-container \
  -p 3001:3000 \
  -e DATABASE_URL=postgresql://postgres:password@localhost:5432/g-imgs \
  -e NEXT_PUBLIC_CLIENTVAR=bat \
  next-app