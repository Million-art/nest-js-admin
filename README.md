src/
├── app.module.ts
├── main.ts
│
├── modules/                        # Each bounded context = a module
│   ├── admin/
│   │   ├── admin.module.ts
│   │   ├── domain/
│   │   │   ├── entities/
│   │   │   │   └── user.entity.ts
│   │   │   ├── events/
│   │   │   │   └── user-created.event.ts
│   │   │   └── port/
│   │   │       ├── user.repository.ts
│   │   │       └── event.publisher.ts
│   │   ├── application/
│   │   │   ├── use-cases/
│   │   │   │   ├── create-user.usecase.ts
│   │   │   │   ├── update-user.usecase.ts
│   │   │   │   └── ...
│   │   │   ├── dto/
│   │   │   │   ├── create-user.dto.ts
│   │   │   │   ├── update-user.dto.ts
│   │   │   │   └── user-response.dto.ts
│   │   │   └── mappers/
│   │   │       └── user.mapper.ts
│   │   ├── infrastructure/
│   │   │   ├── database/
│   │   │   │   ├── models/
│   │   │   │   │   └── user.model.ts
│   │   │   │   └── repositories/
│   │   │   │       └── user.repository.ts
│   │   │   ├── event-bus/
│   │   │   │   └── kafka-event.publisher.ts
│   │   │   └── monitoring/
│   │   │       └── health.controller.ts
│   │   └── presentation/
│   │       ├── controllers/
│   │       │   └── user.controller.ts
│   │       └── filters/
│   │           └── all.exception.ts
│   │
│   ├── auth/
│   │   ├── auth.module.ts
│   │   ├── domain/
│   │   │   ├── entities/
│   │   │   │   └── auth.entity.ts
│   │   │   ├── events/
│   │   │   │   └── user-logged-in.event.ts
│   │   │   └── port/
│   │   │       ├── auth.repository.ts
│   │   │       └── event.publisher.ts
│   │   ├── application/
│   │   │   ├── use-cases/
│   │   │   │   ├── login.usecase.ts
│   │   │   │   ├── register.usecase.ts
│   │   │   │   └── ...
│   │   │   ├── dto/
│   │   │   │   ├── login.dto.ts
│   │   │   │   └── register.dto.ts
│   │   │   └── mappers/
│   │   │       └── auth.mapper.ts
│   │   ├── infrastructure/
│   │   │   ├── database/
│   │   │   │   └── auth.repository.ts
│   │   │   ├── event-bus/
│   │   │   │   └── kafka-event.publisher.ts
│   │   │   └── strategies/
│   │   │       └── jwt.strategy.ts
│   │   └── presentation/
│   │       └── controllers/
│   │           └── auth.controller.ts
│   │
│   └── mini-app/ (future)
│       └── ...
│
├── shared/                          # Shared utilities
│   ├── logs/
│   │   └── logger.service.ts
│   ├── exceptions/
│   │   └── all.exception.ts
│   ├── guards/
│   │   └── jwt.guard.ts
│   └── shared.module.ts
