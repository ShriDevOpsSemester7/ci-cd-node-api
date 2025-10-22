pipeline {
    agent any
    environment { IMAGE_NAME = "my-node-api" }

    stages {
        stage('Checkout') { 
            steps { 
                git branch: 'main', url: 'https://github.com/ShriDevOpsSemester7/ci-cd-node-api.git'
            } 
        }
        stage('Build') { steps { sh 'npm install' } }
        stage('Test') { steps { sh 'echo "No tests yet!"' } }
        stage('Docker Build & Run') {
            steps {
                sh "docker build -t ${IMAGE_NAME} ."
                sh "docker run -d -p 3000:3000 ${IMAGE_NAME}"
            }
        }
        stage('Cleanup') {
            steps { sh 'docker ps -q --filter "ancestor=my-node-api" | xargs -r docker stop' }
        }
    }

    post {
        success { echo "Build and deployment successful." }
        failure { echo "Build failed." }
    }
}

