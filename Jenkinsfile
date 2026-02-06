pipeline {
    agent any

    triggers {
        pollSCM('H/5 * * * *')
    }

    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Verify Docker') {
            steps {
                bat 'docker --version'
                bat 'docker-compose --version'
            }
        }

        stage('Build & Run with Docker Compose') {
            steps {
                bat '''
                docker-compose down
                docker-compose build
                docker-compose up -d
                '''
            }
        }

        stage('Verify Container') {
            steps {
                bat '''
                docker ps
                '''
            }
        }

        stage('Success') {
            steps {
                echo 'Frontend deployed successfully using Docker Compose'
            }
        }
    }
}
