pipeline {
    agent any

    environment {
        IMAGE_NAME = "my-node-api"
    }

    stages {
        stage('Checkout') {
            steps {
                echo "Cloning repository..."
                git branch: 'main', url: 'https://github.com/ShriDevOpsSemester7/ci-cd-node-api.git'
            }
        }

        stage('Build') {
            steps {
                echo "Installing dependencies..."
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo "Running test phase..."
                sh 'echo "No tests yet!"'
            }
        }

        stage('Docker Build & Run') {
            steps {
                script {
                    echo "Building Docker image..."
                    sh "docker build -t ${IMAGE_NAME} ."

                    echo "Running Docker container..."
                    sh '''
                        # Stop any running container using the same image
                        docker ps -q --filter "ancestor=${IMAGE_NAME}" | xargs -r docker stop
                        
                        # Run a new container
                        docker run -d -p 3000:3000 ${IMAGE_NAME}
                    '''
                }
            }
        }

        stage('Post-build Cleanup') {
            steps {
                echo "Cleaning up old containers..."
                sh 'docker container prune -f || true'
                sh 'docker image prune -f || true'
            }
        }
    }

    post {
        success {
            echo "Build and deployment successful."
            echo "Verify at: http://localhost:3000/status"
        }
        failure {
            echo "Build failed. Check logs for details."
        }
    }
}

